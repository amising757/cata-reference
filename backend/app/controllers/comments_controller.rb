class CommentsController < ApplicationController
  before_action :set_player
  
  def create
    @comment = @player.comments.build(comment_params)
    
    if @comment.save
      redirect_to @player, notice: 'Comment was successfully added.'
    else
      redirect_to @player, alert: 'Unable to add comment. Please check your input.'
    end
  end
  
  private
  
  def set_player
    @player = Player.find(params[:player_id])
  end
  
  def comment_params
    params.require(:comment).permit(:author_name, :content)
  end
end